interface UserCardProps {
    name: string
    email: string
}

export default function UserCard({ name, email }: UserCardProps) {
    return (
    <div className="p-4 border rounded-lg shadow-md bg-white text-center space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
    )

}