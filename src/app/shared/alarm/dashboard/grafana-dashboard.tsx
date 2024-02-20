import React from "react";
import { Title } from "rizzui";

export default function GrafanaDashboard() {
  return (
    <div>
      <Title className="sticky top-0">Alarm Monitoring</Title>
      <iframe
        title="Grafana Dashboard"
        width="100%"
        height="600"
        src="http://36.93.33.4:3000/d/b545fba2-5940-463e-b2e3-aba4ffbe7acb/cisco-week-1-4?orgId=1&shareView=link&from=1708285965899&to=1708329165899"
      ></iframe>
    </div>
  );
}
