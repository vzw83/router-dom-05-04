import {Outlet} from "react-router-dom";

type Props = {};
export const Croses = (props: Props) => {
    return (
        <div>
            <div>Header</div>
            <div><Outlet/></div>
            <div>Footer</div>
        </div>
    );
};