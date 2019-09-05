export class Pub {
  constructor(props) {
    this.props = props;
  }

  get(index) {
    return this.props[index] || null;
  }

  set(index, object) {
    this.props[index] = object;
    return true;
  }
}
const url = 'https://swiyt-frontend.herokuapp.com';
export const keys = {
  swiytPNG: `${url}/swiyt.png`,
  loadingSVG: `${url}/loading.svg`,
};
