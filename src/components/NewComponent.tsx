type NewComponentType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number

    name: string

    age: number

}

export const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 18},
    {id: 5, name: "William", age: 25},
    {id: 6, name: "David", age: 32},
    {id: 7, name: "Richard", age: 40},
    {id: 8, name: "Joseph", age: 35},
    {id: 9, name: "Thomas", age: 40},
    {id: 10, name: "Charles", age: 45},
    {id: 11, name: "Christopher", age: 50},
]

type CarsType = {
    topCars: Array<CarType>
}

type CarType = {
    manufacturer: string
    model: string
}

export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
]


export const NewComponent = (props: CarsType) => {

    return (
        <div>
            {props.topCars.map((car, index) => {
                return (
                    <table key={index}>
                        <thead>
                        <tr>
                            <th>{index + 1}</th>
                            <th>Manufacturer</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                        </tbody>
                    </table>
                )
            })}
        </div>
    )
}

