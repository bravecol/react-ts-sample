import { FC } from "react"
import { UserCardType } from "../types/userCardType"

type Props = {
    user: UserCardType
}

export const UserCard: FC<Props> = (props) => {
    const { user } = props;

    const style = {
        border: "solid 1px #ccc",
        borderRadius: "8px",
        padding: "0.5rem",
        margin: "1rem "
    }

    return (
        <div style={style}>
            <dl>
                <dt>名前</dt>
                <dd>{user.name}</dd>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>住所</dt>
                <dd>{user.address}</dd>
            </dl>
        </div>
    )
}