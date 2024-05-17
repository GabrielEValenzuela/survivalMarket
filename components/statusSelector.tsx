import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface StatusSelectorProps {
    callback: (value: string) => void;
    possibleValues: string[];
    currentState: string;
}

export function Selector(props: Readonly<StatusSelectorProps>) {
    return (
        <div>
            <Select onValueChange={props.callback}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={props.currentState} />
                </SelectTrigger>
                <SelectContent>
                    {props.possibleValues.map((value, index) => (
                        <SelectItem key={index} value={value}>{value}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
