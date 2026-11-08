export class UpdateClassroomDTO {

    private constructor(
        public readonly name: string,
        public readonly building: string,
        public readonly capacity: number,
        public readonly status: boolean
    ) {}

    static create(
        object: { [key: string]: any },
    ): [string | undefined, UpdateClassroomDTO?]{
        const {
            name,
            building,
            capacity,
            status
        } = object;

        if(!name) return ["Missing name"];
        if(!building) return ["Missing building"];
        if(!capacity) return ["Missing capacity"];
        if(status === undefined) return ["Missing status"];

        if(name.length > 100)
            return ["name is too large, max length is 100 characters"];

        if(building.length > 100)
            return ["building is too large, max length is 100 characters"];

        if(typeof capacity !== "number" || capacity < 1 || capacity > 200)
            return ["Invalid capacity, it must be a number between 1 and 200"];

        if(typeof status !== "boolean")
            return ["Invalid status"];

        return [
            undefined,
            new UpdateClassroomDTO(
                name,
                building,
                capacity,
                status
            )
        ];

    }

}
