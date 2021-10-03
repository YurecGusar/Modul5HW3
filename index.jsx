const constNum = 3;
const constDegree = 3;
const constSquareSize = "200px";
const constColor = "red";

class PowComponent extends React.Component {
    render() {

        let _num = this.props.num;
        let _degree = this.props.degree;

        return  <div>
                    1) {_num}<sup>{_degree}</sup> = {Math.pow(_num, _degree)}
                </div>;
    }
}

class SquareComponent extends React.Component
{
    render(){

        let _squareSize = this.props.squareSize;
        let _color = this.props.color;

        return <>2) <div style = {{width : _squareSize, height : _squareSize, backgroundColor : _color}}></div></>
    }
}

class Container extends React.Component
{
    render(){
        return  <div>
                    <PowComponent num={constNum} degree={constDegree} />
                    <SquareComponent squareSize={constSquareSize} color= {constColor} />
                </div>
    }
}

ReactDOM.render(
    <Container/>,
    document.getElementById("app")
)
