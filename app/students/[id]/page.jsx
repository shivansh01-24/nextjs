export default async function Studentprofile({ params }){
     const { id } = await params;

    return(
        <div>
        <h1>student profile</h1>
        <p>Student id {id}</p>

        </div>
    );
}