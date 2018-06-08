module Main exposing (..)

import Html exposing (Html, text, div, h1, img, node)
import Html.Attributes exposing (src, attribute)


---- MODEL ----


type alias Model =
    {}


init : ( Model, Cmd Msg )
init =
    ( {}, Cmd.none )



---- UPDATE ----


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



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
        , node "ion-content" [ attribute "padding" "" ] [ text "Elm is here!" ]
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
