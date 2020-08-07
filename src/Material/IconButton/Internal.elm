module Material.IconButton.Internal exposing (Config(..), Icon(..))

import Html exposing (Html)


type Config msg
    = Config
        { disabled : Bool
        , label : Maybe String
        , additionalAttributes : List (Html.Attribute msg)
        , onClick : Maybe msg
        }


type Icon
    = Icon (Html Never)
