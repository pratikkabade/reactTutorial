import { Framework } from "./pages/1.1.Frameworks/Framework";
import Initialization from "./pages/1.Initialization/Initialization";
import Deployment from "./pages/3.Deployment/Deployment";
import { CardOne } from "./pages/4.Advanced/CardOne";

export const OldPage = () => {
    return (
        <div>
            <Initialization />
            <Deployment />
            <Framework />
            <CardOne />
        </div>
    )
}