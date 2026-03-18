from models import Vehicle, Car, Truck
def main():
    my_car = Car("Toyota", "Camry", 2020, 4)
    print(my_car)
    my_car.start_engine()
    my_car.open_trunk()
    my_car.stop_engine()

    my_truck = Truck("Ford", "F-150", 2019, 1000)
    print(my_truck)
    my_truck.start_engine()
    my_truck.load_cargo(500)
    my_truck.stop_engine()  

if __name__ == "__main__":
    main()