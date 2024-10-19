module App exposing (app)

{-| paste in example code and fiddle around
-}

import Node


app =
    { initialState = ()
    , interface =
        \() -> Node.standardOutWrite "hello\n"
    }
