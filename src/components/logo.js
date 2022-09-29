import React from "react";
import { theme } from "../App";

export default function Logo(props) {
     return (
          <div style={{ fontSize: props.size, fontFamily: "Dosis" }}>

                    <code>
                         <em style={{ color: theme.palette.primary.light }}>
                              {"<"}
                         </em>
                         <em style={{ color: theme.palette.primary.light }}>
                              {"/"}
                         </em>
                         {"jja"}

                         <em style={{ color: theme.palette.primary.light }}>
                              {">"}
                         </em>
                    </code>

          </div>
     );
}
