import { Children } from "react";
import { Fragment } from "react";
import BreadcrumbArrow from "../icons/breadcrumb-arrow";

const Breadcrumb = ({ children }) => {
    const childrenArray = Children.toArray(children);

    const childrenWtihSeperator = childrenArray.map((child, index) => {
        if (index !== childrenArray.length - 1) {
            return (
                <Fragment key={index}>
                    {child}
                    <span>
                        <BreadcrumbArrow />
                    </span>
                </Fragment>
            );
        }
        return child;
    });

    return (
        <nav className="breadcrumb" aria-label="breadcrumb">
            <ol>{childrenWtihSeperator}</ol>
        </nav>
    );
};

export default Breadcrumb;