import { useForm } from "react-hook-form"

interface FormData {
    firstName: string
    lastName: string
    emai: string
    formState
}


export default function BasicForm() {
    const {register, handleSubmit} = useForm<FormData>()

      const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>   
        <div>
            <div>
                <input type="text" placeholder="Enter your first name" {...register("firstName")}/>
            </div>

            <div>
                <input type="text" placeholder="Enter your last name" />
            </div>

            <div>
                <input type="text" placeholder="Enter "/>
            </div>

            <div>
                <button disabled type="submit">Submit</button>
            </div>
        </div>
        </form>
        </>
    )
}