import { BreadcrumbExample } from "../helpers/BreadCrumbs";
import { TableDinamyc } from "../helpers/TableDinamyc";

export const LIstClients = () => {
    const dict_bread_crumb = [
        {
            "bread": "lista clientes"
        }
    ]

    const data = [
        { firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
        { firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
        { firstName: 'Larry', lastName: 'Bird', username: '@twitter' },
        { firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
        { firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
        { firstName: 'Larry', lastName: 'Bird', username: '@twitter' },
        { firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
        { firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
        { firstName: 'Larry', lastName: 'Bird', username: '@twitter' },
        { firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
        { firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
        { firstName: 'Larry', lastName: 'Bird', username: '@twitter' },
        { firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
        { firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
        { firstName: 'Larry', lastName: 'Bird', username: '@twitter' },
        // Agrega más datos aquí
    ];

    return (
        <>  
            <h1>Lista de clientes</h1>
            <BreadcrumbExample dict_bread_crumb = { dict_bread_crumb }/>

            <div className="x_panel">

            </div>

            
        </>
    )
}