export default function Container({children,className=""}) {
  return (
    <div className={`xl:px-24 px-3 sm:px-10 ${className}`}>
        {
            children
        } 
    </div>
  )
}
