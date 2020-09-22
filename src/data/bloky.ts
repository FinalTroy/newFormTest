import { ClientIdentification } from "../components/ClientIdentification";
import { ForeignActivities } from "../components/ForeignActivities";
import { OwnerStructure } from "../components/OwnerStructure";
import { RealOwner } from "../components/RealOwner";

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