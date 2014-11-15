package org.nem.monitor.spawn;

import org.nem.core.deploy.*;
import org.nem.monitor.node.NemNodeType;

import java.io.*;
import java.util.logging.Logger;

/**
 * Allows the starting of components as separate processes.
 */
public class JavaProcessBuilder implements JavaSpawnBuilder {
	private static final Logger LOGGER = Logger.getLogger(JavaProcessBuilder.class.getName());

	private final ProcessBuilder builder;

	/**
	 * Creates a new Java process builder.
	 *
	 * @param nodeType The node type to start. This is used to determine the configuration file name and node type that are passed to common starter
	 */
	public JavaProcessBuilder(final NemNodeType nodeType) {
		final String configFilePath = nodeType == NemNodeType.NCC ? "ncc-config.properties" : "nis-config.properties";
		final String nodeTypeText = nodeType == NemNodeType.NCC ? "-ncc" : "-nis";
		this.builder = new ProcessBuilder(
				"java",
				"-classpath",
				System.getProperty("java.class.path"),
				CommonStarter.class.getCanonicalName(),
				"-config",
				configFilePath,
				nodeTypeText);
	}

	@Override
	public void setLogFile(final File logFile) {
		this.builder.redirectErrorStream(true);
		this.builder.redirectOutput(ProcessBuilder.Redirect.appendTo(logFile));
	}

	@Override
	public void start() throws IOException {
		LOGGER.info(String.format("Starting Java process: %s", builder.command()));
		this.builder.start();
	}
}
