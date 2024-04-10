import { useFetcher } from "react-router-dom"
import Button from "../../ui/Button"
import { updateOrder } from "../../services/apiRestaurant"

function UpdateItemPriority() {
    const fetcher = useFetcher()
    return (
        <fetcher.Form method='PATCH'>
            <Button type='primary'>Make Priority</Button>
        </fetcher.Form>
    )
}

export async function action({request , params}){
    console.log('i am action')
    const data = {priority : true}
    await updateOrder(params.orderId , data)

    return null
}

export default UpdateItemPriority
