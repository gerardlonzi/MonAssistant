export default function Container({children,className=""}) {
  return (
    <div className={`px-24 pt-10 ${className}`}>
        {
            children
        } 
    </div>
  )
}
