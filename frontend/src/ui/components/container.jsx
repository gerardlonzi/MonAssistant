export default function Container({children,className=""}) {
  return (
    <div className={`px-24  ${className}`}>
        {
            children
        } 
    </div>
  )
}
