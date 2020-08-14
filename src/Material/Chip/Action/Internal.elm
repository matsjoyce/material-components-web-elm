module Material.Chip.Action.Internal exposing (Chip(..), Config(..), Icon(..))

import Html exposing (Html)


type Config msg
    = Config
        { icon : Maybe Icon
        , additionalAttributes : List (Html.Attribute msg)
        , onClick : Maybe msg
        }


type Chip msg
    = Chip (Config msg) String


type Icon
    = Icon (Html Never)
