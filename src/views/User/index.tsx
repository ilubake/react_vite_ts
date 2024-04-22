function User(){
    function name(params:number[]) {
        return(<ul onClick={(e: React.MouseEvent<HTMLUListElement>)=>{
            const target = e.target as HTMLLIElement;
            console.log(target.dataset.index);
            }}>
            {
        params.map((v,i)=>{
            return(<li data-index={i}key={i}>{v}</li>)
        })
            }
        </ul>)
    }
    return <>
    <h1>用户页</h1>
    {name([1,2,3])}
    </>
}
export default User;