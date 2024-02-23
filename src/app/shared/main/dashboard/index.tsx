import MainDashboardTitle from "@/app/shared/main/dashboard/main-dashborad-title";
import StatCards from "@/app/shared/main/dashboard/stat-cards";
import ProblemTypes from "@/app/shared/main/dashboard/problem-types";
import TicketActivity from "@/app/shared/main/dashboard/ticket-activity";
import CustomerWithMostTickets from "@/app/shared/main/dashboard/customer-with-most-tickets";
import ResponseRate from "@/app/shared/main/dashboard/response-rate";
import EmployeesActivity from "@/app/shared/main/dashboard/employees-activity";
import TicketsTable from "@/app/shared/main/dashboard/tickets";
import CustomerType from "@/app/shared/main/dashboard/customer-type";
import SatisfactionRate from "@/app/shared/main/dashboard/satisfaction-rate";
import CustomerTimezone from "@/app/shared/main/dashboard/customer-timezone";

export default function MainDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-12 gap-6 3xl:gap-8">
        <MainDashboardTitle />
        <StatCards className="col-span-full @2xl:grid-cols-2 @6xl:grid-cols-4" />

        <TicketActivity className="col-span-full" />

        <ProblemTypes className="col-span-full @4xl:col-span-6 @6xl:col-span-7 @7xl:col-span-8" />
        <SatisfactionRate className="col-span-full @4xl:col-span-6 @6xl:col-span-5 @7xl:col-span-4" />

        <CustomerWithMostTickets className="col-span-full" />

        <ResponseRate className="col-span-full @4xl:col-span-6 @6xl:col-span-7" />
        <CustomerType className="col-span-full @4xl:col-span-6 @6xl:col-span-5" />

        <TicketsTable className="col-span-full" />

        <EmployeesActivity className="col-span-full @4xl:col-span-6 @5xl:col-span-7" />
        <CustomerTimezone className="col-span-full @4xl:col-span-6 @5xl:col-span-5" />
      </div>
    </div>
  );
}
