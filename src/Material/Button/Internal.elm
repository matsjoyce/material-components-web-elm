module Material.Button.Internal exposing (Config(..), Icon(..))

import Html exposing (Html)


type Config msg
    = Config
        { icon : Maybe Icon
        , trailingIcon : Bool
        , disabled : Bool
        , dense : Bool
        , href : Maybe String
        , target : Maybe String
        , additionalAttributes : List (Html.Attribute msg)
        , onClick : Maybe msg
        , touch : Bool
        }


type Icon
    = Icon (Html Never)
