module Main exposing (..)

import Html exposing (Html, text, div, h1, img, node)
import Html.Attributes exposing (src, attribute)
import Html.Events exposing (onClick)


---- MODEL ----


type alias Model =
    { counter : Int
    }


init : ( Model, Cmd Msg )
init =
    ( { counter = 0 }, Cmd.none )



---- UPDATE ----


type Msg
    = NoOp
    | Increment
    | Decrement


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            model ! []

        Increment ->
            { model | counter = model.counter + 1 } ! []

        Decrement ->
            { model | counter = model.counter - 1 } ! []



---- VIEW ----


view : Model -> Html Msg
view model =
    node "ion-app"
        []
        [ node "ion-header"
            []
            [ node "ion-toolbar"
                [ attribute "color" "primary" ]
                [ node "ion-title" [] [ text "Elmonic!" ]
                ]
            ]
        , node "ion-content"
            [ attribute "padding" "" ]
            [ Html.p [] [ text "Elm is here!" ]
            , Html.p [] [ text <| "count is " ++ toString model.counter ]
            , node "ion-button" [ onClick Increment ] [ text "+" ]
            ]
        ]



-- <ion-app>
--   <ion-header>
--     <ion-toolbar color='primary'>
--       <ion-title>Ionic JavaScript Starter</ion-title>
--     </ion-toolbar>
--   </ion-header>
--   <ion-content padding>
--     Hello Ionic 4
--   </ion-content>
-- </ion-app>
-- div []
--     [ img [ src "/logo.svg" ] []
--     , h1 [] [ text "boola!" ]
--     ]
---- PROGRAM ----


main : Program Never Model Msg
main =
    Html.program
        { view = view
        , init = init
        , update = update
        , subscriptions = always Sub.none
        }
