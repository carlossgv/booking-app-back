import { Location } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { CreateLocationDto } from "./dto/create-location.dto";
// import { UpdateLocationDto } from "./dto/update-location.dto";

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}

  async create(createLocationDto: CreateLocationDto) {
    return this.prisma.location.create({ data: createLocationDto });
  }

  async findAll(): Promise<Location[]> {
    return this.prisma.location.findMany();
  }

  async findOne(locationId: number) {
    return this.prisma.location.findUnique({ where: { locationId } });
  }

  // update(locationId: number, updateLocationDto: UpdateLocationDto) {
  //   return this.prisma.location.update({
  //     data: updateLocationDto,
  //     where: { locationId },
  //   });
  // }

  remove(locationId: number) {
    return this.prisma.location.delete({ where: { locationId } });
  }
}
