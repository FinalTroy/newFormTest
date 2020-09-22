import { ClientIdentification } from "../components/Block/ClientIdentification";
import { ForeignActivities } from "../components/Block/ForeignActivities";
import { OwnerStructure } from "../components/Block/OwnerStructure";
import { RealOwner } from "../components/Block/RealOwner";

export interface IStep {
    key: string;
    component: React.ComponentType;
    // legalForm
}
export default [
    {
        key: "ClientIdentification",
        component: ClientIdentification,
    },
    {
        key: "ForeignActivities",
        component: ForeignActivities,
    },
    {
        key: "RealOwner",
        component: RealOwner,
    },
    {
        key: "OwnerStructure",
        component: OwnerStructure,
    },
] as IStep[];