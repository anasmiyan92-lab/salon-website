import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    service: string;
    clientName: string;
    email: string;
    preferredDate: string;
    preferredTime: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllBookings(): Promise<Array<Booking>>;
    getCallerUserRole(): Promise<UserRole>;
    getSalonInfo(): Promise<{
        hours: string;
        address: string;
        phone: string;
    }>;
    isCallerAdmin(): Promise<boolean>;
    submitBooking(clientName: string, email: string, phone: string, service: string, preferredDate: string, preferredTime: string): Promise<void>;
}
