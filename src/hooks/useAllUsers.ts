import axios from "axios";
import { useState } from "react";
import { UserCardType } from "../types/userCardType";
import { UserJson } from "../types/userJson";

export const useAllUsers = () => {
    const [userProfiles, serUserProfiles] = useState<Array<UserCardType>>([])

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getUsers = () => {
        axios
            .get<Array<UserJson>>("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setLoading(true);
                setError(false);
                const data = res.data.map((user) => ({
                    id: user.id,
                    name: `${user.name}(${user.username})`,
                    email: user.email,
                    address: `${user.address.city}${user.address.suite}${user.address.street}`
                }))
                serUserProfiles(data);
            }).catch(() => {
                setError(true);
            }).finally(() => {
                setLoading(false);
            });
    }

    return { getUsers, userProfiles, loading, error }
}