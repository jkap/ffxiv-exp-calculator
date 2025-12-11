import { SKYBUILDER_EXP } from "../lib/consts";
import { requiredExp } from "../lib/signals";

function ExpCard({ data }: { data: (typeof SKYBUILDER_EXP)[0] }) {
  return (
    <div class={"card bg-base-200 w-sm shadow-sm"}>
      <div class={"card-body"}>
        <h3 class="card-title mt-0">{data.label}</h3>
        <table class={"table not-prose"}>
          <thead>
            <tr>
              <th>Tier</th>
              <th>EXP</th>
              <th>Turn-ins Required</th>
            </tr>
          </thead>
          <tbody>
            {data.values.map((expVal, index) => (
              <tr className={"tabular-nums"}>
                <td>{index + 1}</td>
                <td>{expVal.toLocaleString()}</td>
                <td>{Math.ceil(requiredExp.value / expVal)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ExpCards() {
  return (
    <div class="prose">
      <h2>Skybuilders' EXP</h2>
      <div class={"flex flex-col gap-4"}>
        {SKYBUILDER_EXP.map((data) => (
          <ExpCard key={data.label} data={data} />
        ))}
        <div class={"card bg-base-200 w-sm shadow-sm"}>
          <div class={"card-body"}>
            <p>
              I don't have the rest of the tiers unlocked yet. I'll add the rest
              of the EXP here when I do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
