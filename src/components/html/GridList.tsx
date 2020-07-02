import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import React from "react";
// import tileData from "./tileData";
 
export default class AdvancedGridList extends React.Component<
  { data: any },
  {}
> {
  componentDidMount() {}

  render() {
    // const classes = useStyles();
    return (
      <div className="grid-list-root grid-list-root-gridlist">
        <GridList
          cellHeight={400}
          spacing={4}
          className="gridList container center test"
        >
          {this.props.data.map((tile: any) => (
            <GridListTile key={tile.img} cols={0} rows={1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}
