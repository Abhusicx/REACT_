

const Row = ({children}) => {
  return (
    <>
      <tr key={children.id}>
            <td>{children.id}</td>
            <td>{children.name}</td>
            <td>{children.age}</td> 
            <td>{children.city}</td>
      </tr>
    </>
  )
}

export default Row
