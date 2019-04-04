module Material.TextField exposing (Config, textField, textFieldConfig, textFieldIcon)

import Html exposing (Html, text)
import Html.Attributes exposing (class)
import Html.Events
import Json.Decode as Decode
import Material.Icon as Icon exposing (icon, iconConfig)


type alias Config msg =
    { label : String
    , fullwidth : Bool
    , textarea : Bool
    , rows : Maybe Int
    , cols : Maybe Int
    , outlined : Bool
    , disabled : Bool
    , required : Bool
    , invalid : Bool
    , minLength : Maybe Int
    , maxLength : Maybe Int
    , min : Maybe Int
    , max : Maybe Int
    , value : Maybe String
    , placeholder : Maybe String
    , leadingIcon : Maybe (Html msg)
    , trailingIcon : Maybe (Html msg)
    , additionalAttributes : List (Html.Attribute msg)
    , onInput : Maybe (String -> msg)
    , onChange : Maybe (String -> msg)
    }


textFieldConfig : Config msg
textFieldConfig =
    { label = ""
    , fullwidth = False
    , textarea = False
    , rows = Nothing
    , cols = Nothing
    , outlined = False
    , disabled = False
    , required = False
    , invalid = False
    , minLength = Nothing
    , maxLength = Nothing
    , min = Nothing
    , max = Nothing
    , value = Nothing
    , placeholder = Nothing
    , additionalAttributes = []
    , leadingIcon = Nothing
    , trailingIcon = Nothing
    , onInput = Nothing
    , onChange = Nothing
    }


textField : Config msg -> Html msg
textField config =
    Html.node "mdc-text-field"
        (List.filterMap identity
            [ rootCs
            , outlinedCs config
            , fullwidthCs config
            , textareaCs config
            , disabledCs config
            , withLeadingIconCs config
            , withTrailingIconCs config
            , valueAttr config
            ]
            ++ config.additionalAttributes
        )
        (List.concat
            [ leadingIconElt config
            , if config.fullwidth then
                if config.textarea || config.outlined then
                    [ inputElt config
                    , notchedOutlineElt config
                    ]

                else
                    [ inputElt config
                    , lineRippleElt
                    ]

              else if config.textarea || config.outlined then
                [ inputElt config
                , notchedOutlineElt config
                ]

              else
                [ inputElt config
                , labelElt config
                , lineRippleElt
                ]
            , trailingIconElt config
            ]
        )


textFieldIcon : Icon.Config msg -> String -> Maybe (Html msg)
textFieldIcon iconConfig iconName =
    Just
        (icon
            { iconConfig
                | additionalAttributes =
                    class "mdc-text-field__icon" :: iconConfig.additionalAttributes
            }
            iconName
        )


rootCs : Maybe (Html.Attribute msg)
rootCs =
    Just (class "mdc-text-field")


outlinedCs : Config msg -> Maybe (Html.Attribute msg)
outlinedCs { outlined } =
    if outlined then
        Just (class "mdc-text-field--outlined")

    else
        Nothing


fullwidthCs : Config msg -> Maybe (Html.Attribute msg)
fullwidthCs { fullwidth } =
    if fullwidth then
        Just (class "mdc-text-field--fullwidth")

    else
        Nothing


textareaCs : Config msg -> Maybe (Html.Attribute msg)
textareaCs { textarea } =
    if textarea then
        Just (class "mdc-text-field--textarea")

    else
        Nothing


disabledCs : Config msg -> Maybe (Html.Attribute msg)
disabledCs { disabled } =
    if disabled then
        Just (class "mdc-text-field--disabled")

    else
        Nothing


withLeadingIconCs : Config msg -> Maybe (Html.Attribute msg)
withLeadingIconCs { leadingIcon } =
    if leadingIcon /= Nothing then
        Just (class "mdc-text-field--with-leading-icon")

    else
        Nothing


withTrailingIconCs : Config msg -> Maybe (Html.Attribute msg)
withTrailingIconCs { trailingIcon } =
    if trailingIcon /= Nothing then
        Just (class "mdc-text-field--with-trailing-icon")

    else
        Nothing


requiredAttr : Config msg -> Maybe (Html.Attribute msg)
requiredAttr { required } =
    if required then
        Just (Html.Attributes.attribute "required" "")

    else
        Nothing


invalidAttr : Config msg -> Maybe (Html.Attribute msg)
invalidAttr { invalid } =
    if invalid then
        Just (Html.Attributes.attribute "invalid" "")

    else
        Nothing


minLengthAttr : Config msg -> Maybe (Html.Attribute msg)
minLengthAttr { minLength } =
    Maybe.map Html.Attributes.minlength minLength


maxLengthAttr : Config msg -> Maybe (Html.Attribute msg)
maxLengthAttr { maxLength } =
    Maybe.map Html.Attributes.maxlength maxLength


minAttr : Config msg -> Maybe (Html.Attribute msg)
minAttr { min } =
    Maybe.map (Html.Attributes.min << String.fromInt) min


maxAttr : Config msg -> Maybe (Html.Attribute msg)
maxAttr { max } =
    Maybe.map (Html.Attributes.max << String.fromInt) max


valueAttr : Config msg -> Maybe (Html.Attribute msg)
valueAttr { value } =
    Maybe.map (Html.Attributes.attribute "value") value


placeholderAttr : Config msg -> Maybe (Html.Attribute msg)
placeholderAttr { placeholder } =
    Maybe.map Html.Attributes.placeholder placeholder


leadingIconElt : Config msg -> List (Html msg)
leadingIconElt { leadingIcon } =
    leadingIcon
        |> Maybe.map List.singleton
        |> Maybe.withDefault []


trailingIconElt : Config msg -> List (Html msg)
trailingIconElt { trailingIcon } =
    trailingIcon
        |> Maybe.map List.singleton
        |> Maybe.withDefault []


inputHandler : Config msg -> Maybe (Html.Attribute msg)
inputHandler { onInput } =
    Maybe.map Html.Events.onInput onInput


changeHandler : Config msg -> Maybe (Html.Attribute msg)
changeHandler { onChange } =
    Maybe.map (\f -> Html.Events.on "change" (Decode.map f Html.Events.targetValue))
        onChange


inputElt : Config msg -> Html msg
inputElt config =
    (if config.textarea then
        Html.textarea

     else
        Html.input
    )
        (List.filterMap identity
            [ inputCs
            , rowsAttr config
            , colsAttr config
            , disabledAttr config
            , requiredAttr config
            , invalidAttr config
            , minLengthAttr config
            , maxLengthAttr config
            , minAttr config
            , maxAttr config
            , placeholderAttr config
            , inputHandler config
            , changeHandler config
            ]
        )
        []


inputCs : Maybe (Html.Attribute msg)
inputCs =
    Just (class "mdc-text-field__input")


rowsAttr : Config msg -> Maybe (Html.Attribute msg)
rowsAttr { textarea, rows } =
    if textarea then
        Maybe.map Html.Attributes.rows rows

    else
        Nothing


colsAttr : Config msg -> Maybe (Html.Attribute msg)
colsAttr { textarea, cols } =
    if textarea then
        Maybe.map Html.Attributes.cols cols

    else
        Nothing


disabledAttr : Config msg -> Maybe (Html.Attribute msg)
disabledAttr { disabled } =
    Just (Html.Attributes.disabled disabled)


labelElt : Config msg -> Html msg
labelElt { label, value } =
    Html.div
        (if Maybe.withDefault "" value /= "" then
            [ class "mdc-floating-label mdc-floating-label--float-above" ]

         else
            [ class "mdc-floating-label" ]
        )
        [ text label ]


lineRippleElt : Html msg
lineRippleElt =
    Html.div [ class "mdc-line-ripple" ] []


notchedOutlineElt : Config msg -> Html msg
notchedOutlineElt config =
    Html.div [ class "mdc-notched-outline" ]
        [ notchedOutlineLeadingElt
        , notchedOutlineNotchElt config
        , notchedOutlineTrailingElt
        ]


notchedOutlineLeadingElt : Html msg
notchedOutlineLeadingElt =
    Html.div [ class "mdc-notched-outline__leading" ] []


notchedOutlineTrailingElt : Html msg
notchedOutlineTrailingElt =
    Html.div [ class "mdc-notched-outline__trailing" ] []


notchedOutlineNotchElt : Config msg -> Html msg
notchedOutlineNotchElt config =
    Html.div [ class "mdc-notched-outline__notch" ] [ labelElt config ]
