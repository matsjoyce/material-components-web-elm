module Material.Chip.Input.Internal exposing (Chip(..), Config(..), Icon(..))

import Html exposing (Html)
import Svg exposing (Svg)


type Config msg
    = Config
        { leadingIcon : Maybe Icon
        , trailingIcon : Maybe Icon
        , additionalAttributes : List (Html.Attribute msg)
        , onClick : Maybe msg
        , onDelete : Maybe msg
        }


type Chip msg
    = Chip (Config msg) String


type Icon
    = Icon (List (Html.Attribute Never) -> List (Html Never) -> Html Never) (List (Html.Attribute Never)) (List (Html Never))
    | SvgIcon (List (Svg.Attribute Never) -> List (Svg Never) -> Svg Never) (List (Svg.Attribute Never)) (List (Svg Never))
