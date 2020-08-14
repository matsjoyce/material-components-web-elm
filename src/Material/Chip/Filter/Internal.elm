module Material.Chip.Filter.Internal exposing (Chip(..), Config(..), Icon(..))

import Html exposing (Html)


type Config msg
    = Config
        { icon : Maybe Icon
        , selected : Bool
        , additionalAttributes : List (Html.Attribute msg)
        , onChange : Maybe msg
        }


type Chip msg
    = Chip (Config msg) String


type Icon
    = Icon (Html Never)
