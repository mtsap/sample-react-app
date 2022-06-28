import Carousel from "better-react-carousel";
const Grid = ({ results }) => {
  return (
    <Carousel cols={5} rows={10} gap={10} loop>
      {results.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img width="50%" src={item.images.downsized.url} alt="item.item" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

Grid.defaultProps = {
  results: [],
};

export default Grid;
