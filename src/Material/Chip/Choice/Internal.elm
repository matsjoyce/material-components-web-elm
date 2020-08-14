module Material.Chip.Choice.Internal exposing (Chip(..), Config(..), Icon(..))

import Html exposing (Html)


type Config msg
    = Config
        { icon : Maybe Icon
        , additionalAttributes : List (Html.Attribute msg)
        }


type Chip a msg
    = Chip (Config msg) a


type Icon
    = Icon (Html Never)
