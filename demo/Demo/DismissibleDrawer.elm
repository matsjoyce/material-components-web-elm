module Demo.DismissibleDrawer exposing
    ( Model
    , Msg(..)
    , defaultModel
    , update
    , view
    )

import Demo.Page exposing (Page)
import Demo.PermanentDrawer
import Html exposing (Html, text)
import Html.Attributes
import Html.Events
import Json.Decode as Json
import Material.Button as Button
import Material.Drawer as Drawer exposing (dismissibleDrawer, drawerConfig)
import Material.Icon as Icon exposing (icon, iconConfig)
import Material.List as Lists
import Material.TopAppBar as TopAppBar exposing (topAppBar, topAppBarConfig)
import Material.Typography as Typography
import Platform.Cmd exposing (Cmd, none)


type alias Model =
    { drawerOpen : Bool
    , selectedIndex : Int
    }


defaultModel : Model
defaultModel =
    { drawerOpen = False
    , selectedIndex = 0
    }


type Msg
    = ToggleDrawer
    | SetSelectedIndex Int


update : (Msg -> m) -> Msg -> Model -> ( Model, Cmd m )
update lift msg model =
    case msg of
        ToggleDrawer ->
            ( { model | drawerOpen = not model.drawerOpen }, Cmd.none )

        SetSelectedIndex index ->
            ( { model | selectedIndex = index }, Cmd.none )


view : (Msg -> m) -> Page m -> Model -> Html m
view lift page model =
    Html.div
        [ Html.Attributes.class "drawer-frame-root"
        , Html.Attributes.class "mdc-typography"
        , Html.Attributes.style "display" "flex"
        , Html.Attributes.style "height" "100vh"
        ]
        [ dismissibleDrawer
            { drawerConfig
                | open = model.drawerOpen
            }
            (Demo.PermanentDrawer.drawerBody (lift << SetSelectedIndex)
                model.selectedIndex
            )
        , Html.div
            [ Drawer.appContent ]
            [ topAppBar topAppBarConfig
                [ TopAppBar.row []
                    [ TopAppBar.section
                        [ TopAppBar.alignStart
                        ]
                        [ icon
                            { iconConfig
                                | additionalAttributes =
                                    [ TopAppBar.navigationIcon
                                    , Html.Events.onClick (lift ToggleDrawer)
                                    ]
                            }
                            "menu"
                        , Html.span [ TopAppBar.title ] [ text "Dismissible Drawer" ]
                        ]
                    ]
                ]
            , Demo.PermanentDrawer.mainContent model lift
            ]
        , Html.node "style"
            [ Html.Attributes.type_ "text/css"
            ]
            [ text """
html, body {
  width: 100%;
  height: 100%;
}
        """
            ]
        ]
