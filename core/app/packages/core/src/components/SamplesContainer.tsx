import { OPERATOR_PROMPT_AREAS, OperatorPromptArea } from "@tensorgrid/operators";
import { PANEL_AREA, PanelArea } from "@tensorgrid/spaces";
import * as fos from "@tensorgrid/state";
import { constants } from "@tensorgrid/utilities";
import type { Controller } from "@react-spring/web";
import React, { useCallback } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import MainSpace from "./MainSpace";
import SchemaSettings from "./Schema/SchemaSettings";
import { Entries, default as RenderSidebar } from "./Sidebar";
import { Filter } from "./Sidebar/Entries";
import { createExploreIsDisabled } from "./Sidebar/InteractiveSidebar";
import SidebarContainer from "./Sidebar/SidebarContainer";
import ViewSelection from "./Sidebar/ViewSelection";

const { IS_APP_MODE_FIFTYONE } = constants;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  overflow: hidden;
  background: ${({ theme }) => theme.background.header};
`;

const TopContainer = styled.div`
  padding: 1rem 1rem 0.75rem 1rem;
  background: ${({ theme }) => theme.background.sidebar};
  display: flex;
  flex-direction: column;
  row-gap: 0.625rem;
  border-radius: 0 var(--tg-radius-md, 12px) 0 0;
  border-bottom: 1px solid rgba(255, 107, 0, 0.08);
`;

const Sidebar = () => {
  const disabled = useRecoilValue(fos.disabledCheckboxPaths);
  const renderGridEntry = useCallback(
    (
      key: string,
      group: string,
      entry: fos.SidebarEntry,
      controller: Controller,
      trigger: (
        event: React.MouseEvent<HTMLDivElement>,
        key: string,
        cb: () => void,
      ) => void,
    ) => {
      switch (entry.kind) {
        case fos.EntryKind.PATH: // e.g. metadata
          const isDisabled = disabled.has(entry.path);

          return {
            children: (
              <Entries.FilterablePath
                entryKey={key}
                disabled={isDisabled}
                group={group}
                key={key}
                modal={false}
                path={entry.path}
                onBlur={() => {
                  controller.set({ zIndex: "0", overflow: "hidden" });
                }}
                onFocus={() => {
                  controller.set({ zIndex: "1", overflow: "visible" });
                }}
                trigger={isDisabled ? undefined : trigger}
              />
            ),
            disabled: disabled.has(entry.path),
          };
        case fos.EntryKind.GROUP:
          return {
            children: (
              <Entries.PathGroup
                entryKey={key}
                key={key}
                name={entry.name}
                modal={false}
                mutable={
                  ![fos.OTHER_GROUP, fos.TAGS_FIELD].includes(entry.name)
                }
                trigger={trigger}
              />
            ),
            disabled: false,
          };
        case fos.EntryKind.INPUT:
          return {
            children:
              entry.type === "add" ? (
                <Entries.AddGroup key={key} />
              ) : (
                <Entries.Filter modal={false} key={key} />
              ),
            disabled: true,
          };
        case fos.EntryKind.EMPTY:
          return {
            children: (
              <Entries.Empty
                useText={() => ({
                  text: "No fields",
                  loading: false,
                })}
                key={key}
              />
            ),
            disabled: true,
          };
        default:
          throw new Error("invalid entry");
      }
    },
    [disabled],
  );

  return (
    <SidebarContainer modal={false}>
      <SchemaSettings />

      <TopContainer>
        <ViewSelection />
        <Filter />
      </TopContainer>

      <RenderSidebar
        isDisabled={createExploreIsDisabled(disabled)}
        useEntries={fos.useGridEntries}
        render={renderGridEntry}
        modal={false}
      />
    </SidebarContainer>
  );
};

function SamplesContainer() {
  const showSidebar = useRecoilValue(fos.sidebarVisible(false));

  const isModalOpen = useRecoilValue(fos.isModalActive);

  return (
    <Container>
      {!isModalOpen && (
        <OperatorPromptArea area={OPERATOR_PROMPT_AREAS.DRAWER_LEFT} />
      )}
      {showSidebar && <Sidebar />}
      <MainSpace />
      {!isModalOpen && (
        <OperatorPromptArea area={OPERATOR_PROMPT_AREAS.DRAWER_RIGHT} />
      )}
      {IS_APP_MODE_FIFTYONE && (
        <PanelArea
          id={PANEL_AREA.GRID_SIDEBAR_RIGHT}
          resize={{ direction: "left" }}
        />
      )}
    </Container>
  );
}

export default React.memo(SamplesContainer);
