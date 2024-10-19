#!/usr/bin/env node
import * as Node from "@lue-bird/elm-state-interface/node"
import { Elm } from "./elmMain.js"

const elmApp = Elm.Main.init()
Node.programStart({ ports: elmApp.ports })
