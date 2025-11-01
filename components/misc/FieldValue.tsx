
type FieldValueProps = {
    name: string,
    value?: string | number
}

const FieldValue = ({
    name,
    value
}: FieldValueProps) => {
    return (
        <section>
            <p className="text-xs font-semibold text-gray-400">
                {name}
            </p>
            <p className="text-white">
                {value || 'N/A'}
            </p>
        </section>
    )
}

export default FieldValue