// Pure react
const Book = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h2', {}, props.name),
        React.createElement('p', {}, props.year),
        React.createElement('p', {}, props.price)
])
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {id: 'title', className: 'photograf'}, 'Hello world'),
        React.createElement(Book, {name: 'JS for beginners', year: 2020, price: 50}),
        React.createElement(Book, {name: 'PHP for beginners', year: 2010, price: 60}),
        React.createElement(Book, {name: 'Java for beginners', year: 2000, price: 70})
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))


