import { BreadcrumbExample } from "../helpers/BreadCrumbs";

export const LIstClients = () => {
    const dict_bread_crumb = [
        {
            "bread": "lista clientes"
        }
    ]

    return (
        <>
            <BreadcrumbExample dict_bread_crumb = { dict_bread_crumb }/>
        </>
    )
}