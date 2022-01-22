
import react from "react"

export default props => (
    <table className="table">
    <thead>
        <tr>
          <th onClick={props.onSort.bind(null, "Дата")}>Дата></th> 
        
          <th onClick={props.onSort.bind(null, "Название")}>Название</th> 

          <th onClick={props.onSort.bind(null, "Количество")}>Количество</th> 

          <th onClick={props.onSort.bind(null, "Расстояние")}>Расстояние</th> 
        
        
          
        </tr>
    </thead>
    <tbody>
       {props.data.map(item => (
          <tr key={item.Дата + item.Расстояние}>
          
              <td>{item.Дата}</td>
              <td>{item.Название}</td>
              <td>{item.Количество}</td>
              <td>{item.Расстояние}</td>
          </tr>
      )
      )} 
    </tbody>
        
        ))}
    </table>