import CookingInstructions from "../components/ProfileP/CookingInstructions";
import ProfilePost from "../components/ProfileP/ProfilePost";

export default function ProfileP() {
    return (
        <div>
            <ProfilePost/>
            <div className="py-3"/>
            <CookingInstructions/>
        </div>
    )
}
