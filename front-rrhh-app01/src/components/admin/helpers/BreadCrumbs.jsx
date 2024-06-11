import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const BreadcrumbExample = ({ dict_bread_crumb }) => {
    
    return (
        <Breadcrumb>
                { 
                    dict_bread_crumb.map( (bread_crumb) => (
                        <Breadcrumb.Item>{bread_crumb.bread}</Breadcrumb.Item>
                    ))
                }
        </Breadcrumb>
    );
}
