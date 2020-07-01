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
    return (
      <div className="container row">
        <div className="col m6 s12">
          <GridList cellHeight={200} spacing={1} className="gridList">
            {this.props.data.map((tile: any) => (
              <GridListTile
                key={tile.img}
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
              >
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div className="col m6 s12">
          <GridList cellHeight={200} spacing={1} className="gridList">
            {this.props.data.map((tile: any) => (
              <GridListTile
                key={tile.img}
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
              >
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}
