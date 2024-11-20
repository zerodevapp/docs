export default function VersionWarning({ version }: { version?: string }) {
	switch (version) {
		case "5.3.x":
			return (
				<aside className="vocs_Callout vocs_Callout_danger">
					<p className="vocs_Paragraph">
						You are viewing `@zerodev/sdk` v5.3.x documentation.{" "}
						<a
							style={{
								color: "var(--vocs-color_textAccent)",
							}}
							href="/"
						>
							Click here
						</a>{" "}
						to view the latest documentation.
					</p>
				</aside>
			)
		default:
			return <></>
	}
}
