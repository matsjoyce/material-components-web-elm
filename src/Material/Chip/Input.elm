module Material.Chip.Input exposing
    ( Config, config
    , setOnClick
    , setOnDelete
    , setLeadingIcon
    , setTrailingIcon
    , setAttributes
    , chip, Chip
    , Icon, icon
    , customIcon
    , svgIcon
    )

{-| Chips are compact elements that allow users to enter information, select a
choice, filter content, or trigger an action.

Input chips are a variant of chips which enable user input by converting text
into chips.


# Table of Contents

  - [Resources](#resources)
  - [Basic Usage](#basic-usage)
  - [Configuration](#configuration)
      - [Configuration Options](#configuration-options)
  - [Input Chip](#input-chip)


# Resources

  - [Demo: Chips](https://aforemny.github.io/material-components-web-elm/#chips)
  - [Material Design Guidelines: Chips](https://material.io/go/design-chips)
  - [MDC Web: Chips](https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips)
  - [Sass Mixins (MDC Web)](https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips#sass-mixins)


# Basic Usage

    import Material.Chip.Input as InputChip
    import Material.ChipSet.Input as InputChipSet

    type Msg
        = ChipSelected String

    main =
        InputChipSet.chipSet []
            [ InputChip.chip InputChip.config "Chip One"
            , InputChip.chip InputChip.config "Chip Two"
            ]


# Configuration

@docs Config, config


## Configuration Options

@docs setOnClick
@docs setOnDelete
@docs setLeadingIcon
@docs setTrailingIcon
@docs setAttributes


# Input Chip

@docs chip, Chip


# Input Chip with Custom Icon

This library natively supports [Material Icons](https://material.io/icons).
However, you may also include SVG or custom icons such as FontAwesome.

@docs Icon, icon
@docs customIcon
@docs svgIcon

-}

import Html exposing (Html, text)
import Html.Attributes exposing (class, style)
import Material.Chip.Input.Internal exposing (Chip(..), Config(..), Icon(..))
import Svg exposing (Svg)
import Svg.Attributes


{-| Configuration of an input chip
-}
type alias Config msg =
    Material.Chip.Input.Internal.Config msg


{-| Default configuration of an input chip
-}
config : Config msg
config =
    Config
        { leadingIcon = Nothing
        , trailingIcon = Nothing
        , additionalAttributes = []
        , onDelete = Nothing
        , onClick = Nothing
        }


{-| Specify whether an input chip displays a leading icon
-}
setLeadingIcon : Maybe Icon -> Config msg -> Config msg
setLeadingIcon leadingIcon (Config config_) =
    Config { config_ | leadingIcon = leadingIcon }


{-| Specify whether an input chip displays a trailing icon
-}
setTrailingIcon : Maybe Icon -> Config msg -> Config msg
setTrailingIcon trailingIcon (Config config_) =
    Config { config_ | trailingIcon = trailingIcon }


{-| Specify additonal attributes
-}
setAttributes : List (Html.Attribute msg) -> Config msg -> Config msg
setAttributes additionalAttributes (Config config_) =
    Config { config_ | additionalAttributes = additionalAttributes }


{-| Specify a message when the user clicks on a chip's trailing icon
-}
setOnDelete : msg -> Config msg -> Config msg
setOnDelete onDelete (Config config_) =
    Config { config_ | onDelete = Just onDelete }


{-| Specify a message when the user clicks on a chip
-}
setOnClick : msg -> Config msg -> Config msg
setOnClick onClick (Config config_) =
    Config { config_ | onClick = Just onClick }


{-| Input chip type
-}
type alias Chip msg =
    Material.Chip.Input.Internal.Chip msg


{-| Input chip view function
-}
chip : Config msg -> String -> Chip msg
chip =
    Chip


{-| Icon type
-}
type alias Icon =
    Material.Chip.Input.Internal.Icon


{-| Material Icon

    ActionChip.chip
        (ActionChip.config
            |> ActionChip.setIcon (ActionChip.icon "favorite")
        )
        "Add to favorites"

-}
icon : String -> Icon
icon iconName =
    Icon Html.i
        [ class "material-icons mdc-chip__icon mdc-chip__icon--leading" ]
        [ text iconName ]


{-| Custom icon

    ActionChip.chip
        (ActionChip.config
            |> ActionChip.setIcon
                (ActionChip.customIcon Html.i
                    [ class "fab fa-font-awesome" ]
                    []
                )
        )
        "Font awesome"

-}
customIcon :
    (List (Html.Attribute Never) -> List (Html Never) -> Html Never)
    -> List (Html.Attribute Never)
    -> List (Html Never)
    -> Icon
customIcon node additionalAttributes children =
    Icon node
        (class "mdc-chip__icon mdc-chip__icon--leading"
            :: additionalAttributes
        )
        children


{-| SVG icon

    ActionChip.chip
        (ActionChip.config
            |> ActionChip.setIcon
                (ActionChip.svgIcon
                    [ Svg.Attributes.viewBox "…" ]
                    [-- …
                    ]
                )
        )
        "Font awesome"

-}
svgIcon : List (Svg.Attribute Never) -> List (Svg Never) -> Icon
svgIcon additionalAttributes children =
    Icon Svg.svg
        (Svg.Attributes.class "mdc-chip__icon mdc-chip__icon--leading"
            :: additionalAttributes
        )
        children
