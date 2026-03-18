class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year 
    def start_engine(self):
        print(f"{self.make} {self.model} engine started.")  
    def stop_engine(self):
        print(f"{self.make} {self.model} engine stopped.")
    def __str__(self):
        return f"{self.year} {self.make} {self.model}"

class Car(Vehicle):
    def __init__(self, make, model, year, num_doors):
        super().__init__(make, model, year)
        self.num_doors = num_doors
    def open_trunk(self):
        print(f"{self.make} {self.model} trunk opened.")
    def __str__(self):
        return f"{super().__str__()} with {self.num_doors} doors"

class Truck(Vehicle):
    def __init__(self, make, model, year, payload_capacity):
        super().__init__(make, model, year)
        self.payload_capacity = payload_capacity
    def load_cargo(self, weight):
        if weight <= self.payload_capacity:
            print(f"{weight} kg loaded into {self.make} {self.model}.")
        else:
            print(f"Cannot load {weight} kg. Exceeds payload capacity of {self.payload_capacity} kg.")                    